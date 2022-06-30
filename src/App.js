import './App.css';

function App() {
  return (
    <div className="App">
      <h5 className="c-group__header">Please select if you or your family member have a history of any of the below skin conditions</h5>
      <div className="c-group">

        <div className="c-group__item">
          <div className="c-group__label">
            <label className="c-group__display" htmlFor="melanoma">
              <span className="c-group__display">Melonoma</span>
              <span className="c-group__selection">You</span>
            </label>
          </div>
          <div className="c-group__input">
            <input tabIndex="0" id="melanoma" type="checkbox"/></div>
        </div>

        <div className="c-group__item">
          <div className="c-group__label">
            <label className="c-group__display" htmlFor="otc">
              <span className="c-group__display">Other Skin Cancers(Basal Cell,Squamous Cell)</span>
              <span className="c-group__selection">Family Member</span>
            </label>
          </div>
          <div className="c-group__input">
            <input tabIndex="0"  id="otc" type="checkbox"/></div>
        </div>

        <div className="c-group__item">
          <div className="c-group__label"><label htmlFor="eczema">Eczema</label></div>
          <div className="c-group__input">
            <input tabIndex="0"  id="eczema" type="checkbox"/></div>
        </div>

        <div className="c-group__item">
          <div className="c-group__label"><label htmlFor="psoriasis">Psoriasis</label></div>
          <div className="c-group__input">
            <input tabIndex="0"  id="psoriasis" type="checkbox"/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
