import React, { useState, useRef, useEffect } from "react";

export default function CustomCalendar({
  placeholder,
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectingStart, setSelectingStart] = useState(true); // true: 시작일 선택 중, false: 종료일 선택 중
  const wrapperRef = useRef(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 날짜만 포맷 (YYYY-MM-DD)
  const formatDateOnly = (dateObj) => {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // 날짜 클릭 핸들러
  const handleDateClick = (dateObj) => {
    const formattedDate = formatDateOnly(dateObj);
    
    if (selectingStart) {
      // 시작일 선택
      setStartDate(formattedDate);
      setEndDate(""); // 종료일 초기화
      setSelectingStart(false); // 다음은 종료일 선택
    } else {
      // 종료일 선택
      const startDateObj = new Date(startDate);
      if (dateObj < startDateObj) {
        // 종료일이 시작일보다 이전이면 시작일로 재설정
        setStartDate(formattedDate);
        setEndDate("");
        setSelectingStart(false);
      } else {
        setEndDate(formattedDate);
        setIsOpen(false); // 종료일 선택 후 달력 닫기
        setSelectingStart(true); // 다음 번을 위해 리셋
      }
    }
  };

  // 이전 달
  const prevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  // 다음 달
  const nextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  // 해당 달의 날짜 데이터 생성
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentYear, currentMonth, i));
  }

  // 날짜가 범위 안에 있는지 확인
  const isInRange = (dateObj) => {
    if (!startDate || !endDate || !dateObj) return false;
    const date = formatDateOnly(dateObj);
    return date >= startDate && date <= endDate;
  };

  // 날짜가 시작일 또는 종료일인지 확인
  const isSelectedDate = (dateObj) => {
    if (!dateObj) return false;
    const date = formatDateOnly(dateObj);
    return date === startDate || date === endDate;
  };

  // 표시용 텍스트
  const displayText = () => {
    if (startDate && endDate) {
      return `${startDate} ~ ${endDate}`;
    } else if (startDate) {
      return `${startDate} ~ `;
    }
    return "";
  };

  // 초기화 버튼 핸들러
  const handleClear = (e) => {
    e.stopPropagation();
    setStartDate("");
    setEndDate("");
    setSelectingStart(true);
  };

  return (
    <div
      ref={wrapperRef}
      style={{ width: "100%", position: "relative", display: "inline-block" }}
    >
      {/* 인풋 영역 */}
      <div 
        className="input-box" 
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setSelectingStart(true); // 열 때마다 시작일 선택 모드로
        }}
        style={{ 
          cursor: "pointer",
          padding: "12px 16px",
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          gap: "8px",
          border: "1px solid var(--color-monotone-2)",
          borderRadius: "8px",
          background: "var(--color-bg)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, minWidth: 0 }}>
          <span className="material-symbols-rounded" style={{ fontSize: "20px", flexShrink: 0, color: "var(--color-monotone-4)" }}>
            calendar_month
          </span>
          <input
            type="text"
            placeholder={placeholder || "Select date range"}
            value={displayText()}
            readOnly
            className="calendar-input"
            style={{
              padding: "0",
              border: "none", 
              outline: "none",
              background: "transparent",
              cursor: "pointer",
              flex: 1,
              minWidth: 0,
              width: "100%",
              fontSize: "14px",
              color: "var(--color-text)"
            }}
          />
        </div>
        {displayText() && (
          <span 
            className="material-symbols-rounded" 
            onClick={handleClear}
            style={{ 
              fontSize: "20px",
              flexShrink: 0,
              cursor: "pointer",
              color: "var(--color-monotone-4)"
            }}
          >
            close
          </span>
        )}
        <span 
          className="material-symbols-rounded" 
          style={{ 
            fontSize: "20px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            flexShrink: 0,
            color: "var(--color-monotone-4)"
          }}
        >
          expand_more
        </span>
      </div>

      {/* 달력 영역 */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            marginTop: "5px",
            background: "var(--color-bg)",
            border: "1px solid var(--color-monotone-2)",
            borderRadius: "8px",
            padding: "16px",
            zIndex: 1000,
            width: "370px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
          }}
        >
          {/* 헤더 */}
          <div
            style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              marginBottom: "20px"
            }}
          >
            <div style={{ fontSize: "16px", fontWeight: 600, color: "var(--color-text)" }}>
              {currentYear}년 {currentMonth + 1}월
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={prevMonth}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  color: "var(--color-text)"
                }}
              >
                <span className="material-symbols-rounded" style={{ fontSize: "20px" }}>
                  chevron_left
                </span>
              </button>
              <button
                onClick={nextMonth}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  color: "var(--color-text)"
                }}
              >
                <span className="material-symbols-rounded" style={{ fontSize: "20px" }}>
                  chevron_right
                </span>
              </button>
            </div>
          </div>

          {/* 요일 헤더 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "12px",
              marginBottom: "8px",
              textAlign: "center"
            }}
          >
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} style={{ fontSize: "12px", fontWeight: 500, color: "var(--color-monotone-4)" }}>
                {day}
              </div>
            ))}
          </div>

          {/* 날짜 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "12px",
              textAlign: "center"
            }}
          >
            {days.map((dateObj, idx) => {
              const isSelected = isSelectedDate(dateObj);
              const inRange = isInRange(dateObj);
              
              return (
                <div
                  key={idx}
                  style={{
                    aspectRatio: "1",
                    borderRadius: "50%",
                    background: isSelected
                      ? "var(--color-primary)"
                      : inRange
                      ? "var(--color-sub-2)"
                      : "transparent",
                    color: isSelected 
                      ? "white" 
                      : inRange 
                      ? "var(--color-text)" 
                      : dateObj 
                      ? "var(--color-text)" 
                      : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    cursor: dateObj ? "pointer" : "default",
                    transition: "all 0.2s ease"
                  }}
                  onClick={() => dateObj && handleDateClick(dateObj)}
                  onMouseEnter={(e) => {
                    if (dateObj && !isSelected && !inRange) {
                      e.currentTarget.style.background = "var(--color-monotone-1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (dateObj && !isSelected && !inRange) {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {dateObj ? dateObj.getDate() : ""}
                </div>
              );
            })}
          </div>

          {/* 안내 텍스트 */}
          <div style={{ 
            marginTop: "16px", 
            fontSize: "12px", 
            color: "var(--color-monotone-4)", 
            textAlign: "center" 
          }}>
            {selectingStart ? "시작 날짜를 선택하세요" : "종료 날짜를 선택하세요"}
          </div>
        </div>
      )}
    </div>
  );
}

