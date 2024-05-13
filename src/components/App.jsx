export default function App() {
  return (
    <main>
      <div className="rating">
        <img src="/images/icon-star.svg" alt="" className="icon-star" />
        <form action="">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <fieldset>
            <legend>Rating</legend>
            <input type="radio" value={1} id="1" name="rating" />
            <label htmlFor="1">1</label>
            <input type="radio" value={1} id="2" name="rating" />
            <label htmlFor="2">2</label>
            <input type="radio" value={1} id="3" name="rating" />
            <label htmlFor="3">3</label>
            <input type="radio" value={1} id="4" name="rating" />
            <label htmlFor="4">4</label>
            <input type="radio" value={1} id="5" name="rating" />
            <label htmlFor="5">5</label>
          </fieldset>
          <button>Submit</button>
        </form>
      </div>
      {false && (
        <div className="thanks">
          <img src="/images/illustration-thank-you.svg" alt="" />
          <span>You selected 4 out of 5</span>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don&apos;t hesitate to get in touch!
          </p>
        </div>
      )}
    </main>
  );
}
