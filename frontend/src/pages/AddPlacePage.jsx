import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CITIES_DATA } from "../data/mockData";

const AddPlacePage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    placeType: '',
    cityId: '',
    placeName: '',
    description: '',
    budgetType: '',
    photo: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static submission - just show thank you message
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="page-container" data-testid="add-place-page">
      <Header />
      
      <div className="page-hero">
        <h1 className="page-title">Add a Place</h1>
        <p className="page-subtitle">Share a place you visited</p>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="form-container">
            <form className="place-form" onSubmit={handleSubmit}>
              
              <div className="form-section">
                <h3 className="form-section-title">Place Type *</h3>
                <div className="radio-group">
                  {[
                    { value: 'place', label: 'Place to Visit' },
                    { value: 'food', label: 'Food / Cafe' },
                    { value: 'stay', label: 'Budget Stay' }
                  ].map((type) => (
                    <label className="radio-label" key={type.value}>
                      <input 
                        type="radio" 
                        name="place-type" 
                        className="radio-input"
                        value={type.value}
                        checked={formData.placeType === type.value}
                        onChange={(e) => setFormData({...formData, placeType: e.target.value})}
                        data-testid={`place-type-${type.value}`}
                      />
                      <span>{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Select City *</h3>
                <select 
                  className="form-select"
                  value={formData.cityId}
                  onChange={(e) => setFormData({...formData, cityId: e.target.value})}
                  data-testid="city-select"
                >
                  <option value="">Choose a city...</option>
                  {CITIES_DATA.map((city) => (
                    <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
                  ))}
                </select>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Place Name *</h3>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Enter place name"
                  value={formData.placeName}
                  onChange={(e) => setFormData({...formData, placeName: e.target.value})}
                  data-testid="place-name-input"
                />
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Description *</h3>
                <textarea 
                  className="form-textarea" 
                  rows="4" 
                  placeholder="Tell us about this place..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  data-testid="description-textarea"
                />
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Photo Upload (Optional)</h3>
                <div className="photo-upload-container">
                  <input 
                    type="file" 
                    id="photo-upload" 
                    className="photo-upload-input" 
                    accept="image/*"
                    onChange={(e) => setFormData({...formData, photo: e.target.files[0]})}
                    data-testid="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="photo-upload-label">
                    <span className="photo-upload-text">
                      {formData.photo ? formData.photo.name : 'Choose Photo'}
                    </span>
                  </label>
                  <p className="photo-upload-note">Photo upload is optional. You can submit without a photo.</p>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Budget Type *</h3>
                <div className="radio-group radio-group-horizontal">
                  {['budget', 'standard', 'premium'].map((b) => (
                    <label className="radio-label" key={b}>
                      <input 
                        type="radio" 
                        name="budget-type" 
                        className="radio-input"
                        value={b}
                        checked={formData.budgetType === b}
                        onChange={(e) => setFormData({...formData, budgetType: e.target.value})}
                        data-testid={`budget-type-${b}`}
                      />
                      <span>{b.charAt(0).toUpperCase() + b.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                type="submit" 
                className="form-submit"
                data-testid="submit-btn"
              >
                Submit for Review
              </button>

              {submitted && (
                <div className="thank-you-message" data-testid="thank-you-message">
                  <p>Thanks for contributing! We will review and add it soon.</p>
                </div>
              )}

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AddPlacePage;
