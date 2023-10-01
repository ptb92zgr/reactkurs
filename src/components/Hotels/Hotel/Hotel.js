import styles from "./Hotel.module.css";
import hotelImg from "../../../assets/images/hotel1.jpg";

function Hotel() {
  return (
    <div className={`card ${styles.hotel}`}>
      <div className="card-body">
        <div className={`row`}>
          <div className="col-4">
            <img
              src={hotelImg}
              alt="hotel"
              className="img-fluid img-thumbnail"
            />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p className={styles.title}>Pensjonat</p>
                <p>Warszawa</p>
              </div>
              <div className="col">
                <h5>Ocena: 8.3</h5>
                <a href="#" className="btn px-5 btn-primary">
                  Pokaż
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              consectetur commodo auctor. Quisque lacinia quam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
