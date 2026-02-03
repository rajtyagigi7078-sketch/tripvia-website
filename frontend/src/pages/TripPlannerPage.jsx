import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollCard from "../components/ScrollCard";
import { CITIES_DATA, ITEMS_DATA } from "../data/mockData";

const TripPlannerPage = () => {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState("");
  const [persons, setPersons] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const showResults = step === 4;
  const selectedCity = CITIES_DATA.find(c => c.city_id === destination);
  const suggestedPlaces = ITEMS_DATA.filter(i => i.city_id === destination && i.type === "place");
  const suggestedFood = ITEMS_DATA.filter(i => i.city_id === destination && i.type === "food");
  const suggestedActivities = ITEMS_DATA.filter(i => i.city_id === destination && i.type === "activity");
  const suggestedStays = ITEMS_DATA.filter(i => i.city_id === destination && i.type === "stay" && i.budget_type === budget);
  const allStays = ITEMS_DATA.filter(i => i.city_id === destination && i.type === "stay");

  const handleViewFullDestination = () => {
    if (destination) {
      navigate(`/destination/${destination}`);
    }
  };

  return (
    <div className="page-container" data-testid="trip-planner-page">
      <Header />
      
      <div className="page-hero">
        <h1 className="page-title">Complete Trip Plan</h1>
        <p className="page-subtitle">Get personalized suggestions in 3 simple steps</p>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="trip-planner-container">
            
            {/* Progress Indicator */}
            <div className="trip-progress" data-testid="trip-progress">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={`progress-step ${step >= s ? 'active' : ''} ${step > s ? 'completed' : ''}`}
                >
                  <span className="progress-number">{s}</span>
                  <span className="progress-label">
                    {s === 1 ? 'Destination' : s === 2 ? 'People' : 'Budget'}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Step 1: Select Destination */}
            {step === 1 && (
              <div className="trip-step" data-testid="step-1">
                <h2 className="trip-step-title">Step 1: Select Destination</h2>
                <div className="trip-options">
                  {CITIES_DATA.map((city) => (
                    <button
                      key={city.city_id}
                      className={`trip-option-btn ${destination === city.city_id ? 'active' : ''}`}
                      onClick={() => setDestination(city.city_id)}
                      data-testid={`destination-${city.city_id}`}
                    >
                      {city.city_name}
                    </button>
                  ))}
                </div>
                <button 
                  className="trip-next-btn" 
                  disabled={!destination}
                  onClick={() => setStep(2)}
                  data-testid="next-btn-1"
                >
                  Next
                </button>
              </div>
            )}

            {/* Step 2: Number of Persons */}
            {step === 2 && (
              <div className="trip-step" data-testid="step-2">
                <h2 className="trip-step-title">Step 2: Number of Persons</h2>
                <div className="trip-options">
                  {['1', '2', '3-4', '5+'].map((num) => (
                    <button
                      key={num}
                      className={`trip-option-btn ${persons === num ? 'active' : ''}`}
                      onClick={() => setPersons(num)}
                      data-testid={`persons-${num}`}
                    >
                      {num} {num === '1' ? 'Person' : 'People'}
                    </button>
                  ))}
                </div>
                <div className="trip-nav-btns">
                  <button className="trip-back-btn" onClick={() => setStep(1)} data-testid="back-btn-2">
                    Back
                  </button>
                  <button 
                    className="trip-next-btn" 
                    disabled={!persons}
                    onClick={() => setStep(3)}
                    data-testid="next-btn-2"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Budget */}
            {step === 3 && (
              <div className="trip-step" data-testid="step-3">
                <h2 className="trip-step-title">Step 3: Select Budget</h2>
                <div className="trip-options">
                  {['budget', 'standard', 'premium'].map((b) => (
                    <button
                      key={b}
                      className={`trip-option-btn ${budget === b ? 'active' : ''}`}
                      onClick={() => setBudget(b)}
                      data-testid={`budget-${b}`}
                    >
                      {b.charAt(0).toUpperCase() + b.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="trip-nav-btns">
                  <button className="trip-back-btn" onClick={() => setStep(2)} data-testid="back-btn-3">
                    Back
                  </button>
                  <button 
                    className="trip-next-btn" 
                    disabled={!budget}
                    onClick={() => setStep(4)}
                    data-testid="get-plan-btn"
                  >
                    Get Plan
                  </button>
                </div>
              </div>
            )}

            {/* Results */}
            {showResults && (
              <div className="trip-results" data-testid="trip-results">
                <h2 className="trip-results-title">Your Trip Plan to {selectedCity?.city_name}</h2>
                <p className="trip-results-subtitle">
                  {persons} {persons === '1' ? 'Person' : 'People'} • {budget.charAt(0).toUpperCase() + budget.slice(1)} Budget
                </p>

                <button 
                  className="view-destination-btn"
                  onClick={handleViewFullDestination}
                  data-testid="view-destination-btn"
                >
                  View Full Destination Page →
                </button>

                <div className="trip-results-section">
                  <h3 className="trip-results-heading">Suggested Places</h3>
                  <div className="horizontal-scroll">
                    {suggestedPlaces.length > 0 ? suggestedPlaces.map((item) => (
                      <ScrollCard
                        key={item.item_id}
                        name={item.title}
                        description={item.short_description}
                        price={item.approx_price_range}
                        testId={`result-place-${item.item_id}`}
                      />
                    )) : <p className="no-results">No places available for this destination</p>}
                  </div>
                </div>

                <div className="trip-results-section">
                  <h3 className="trip-results-heading">Food Suggestions</h3>
                  <div className="horizontal-scroll">
                    {suggestedFood.length > 0 ? suggestedFood.map((item) => (
                      <ScrollCard
                        key={item.item_id}
                        name={item.title}
                        description={item.short_description}
                        price={item.approx_price_range}
                        testId={`result-food-${item.item_id}`}
                      />
                    )) : <p className="no-results">No food suggestions available</p>}
                  </div>
                </div>

                <div className="trip-results-section">
                  <h3 className="trip-results-heading">Things to Do</h3>
                  <div className="horizontal-scroll">
                    {suggestedActivities.length > 0 ? suggestedActivities.map((item) => (
                      <ScrollCard
                        key={item.item_id}
                        name={item.title}
                        description={item.short_description}
                        price={item.approx_price_range}
                        testId={`result-activity-${item.item_id}`}
                      />
                    )) : <p className="no-results">No activities available</p>}
                  </div>
                </div>

                <div className="trip-results-section">
                  <h3 className="trip-results-heading">Recommended Stays ({budget.charAt(0).toUpperCase() + budget.slice(1)})</h3>
                  <div className="horizontal-scroll">
                    {suggestedStays.length > 0 ? suggestedStays.map((item) => (
                      <ScrollCard
                        key={item.item_id}
                        name={item.title}
                        description={item.short_description}
                        price={item.approx_price_range}
                        budgetType={item.budget_type}
                        testId={`result-stay-${item.item_id}`}
                      />
                    )) : (
                      <>
                        <p className="no-results">No {budget} stays available. Here are other options:</p>
                        {allStays.map((item) => (
                          <ScrollCard
                            key={item.item_id}
                            name={item.title}
                            description={item.short_description}
                            price={item.approx_price_range}
                            budgetType={item.budget_type}
                            testId={`result-stay-alt-${item.item_id}`}
                          />
                        ))}
                      </>
                    )}
                  </div>
                </div>

                <div className="trip-booking-section">
                  <h3 className="trip-results-heading">Book Your Travel</h3>
                  <div className="trip-booking-cards">
                    <div className="trip-booking-card">
                      <h4>Bus Travel</h4>
                      <p>Approx: ₹400-₹1500</p>
                      <button className="trip-booking-btn" disabled>Book Bus (Coming Soon)</button>
                    </div>
                    <div className="trip-booking-card">
                      <h4>Hotel Booking</h4>
                      <p>Based on your {budget} budget</p>
                      <button className="trip-booking-btn" disabled>Book Hotel (Coming Soon)</button>
                    </div>
                  </div>
                  <p className="trip-note">Costs are approximate. Bookings handled by third-party partners.</p>
                </div>

                <button 
                  className="trip-reset-btn" 
                  onClick={() => { setStep(1); setDestination(""); setPersons(""); setBudget(""); }}
                  data-testid="plan-another-btn"
                >
                  Plan Another Trip
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TripPlannerPage;
