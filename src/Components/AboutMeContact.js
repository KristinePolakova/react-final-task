import '../Components/AboutMe.css'
function AboutMeContact() {
  return (
    <div className="row p-4 font-family">
      <div className="col-sm-12 col-md-4 d-flex align-items-center">
        <img
          src="/images/valters.jpeg"
          className="img-fluid rounded-2"
          alt="Valters profile"
        />
      </div>
      <div className="col-sm-12 col-md-8 pt-3">
        <h3>Valters Poļakovs</h3>
          <ul className="list-unstyled ">
            <li>Valtera Poļakova fotostudija:</li>
            <li>Nometņu iela 29, Āgenskalns, Rīga.</li>
            <li>e-pasts: foto-valters@inbox.lv</li>
            <li>Tālrunis: 26671517 </li>
          </ul>
      </div>
    </div>
  )
}

export default AboutMeContact
