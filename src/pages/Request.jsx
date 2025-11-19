import PageTitle from '../components/common/PageTitle'

function Request() {
  return (
    <>
      <PageTitle
        title="Sending Request"
        subtitle="You can send request in this form"
      />
      <div id="form-container">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSdw2C54dyPOocW2Kj3g6kTAmHpl_p-Ped19Wviq96WsltSEUA/viewform?embedded=true"
          title="Request Form"
        />
      </div>
    </>
  )
}

export default Request

