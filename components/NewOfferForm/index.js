export default function NewOfferForm({ credit, onSubmit, user, starship }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit({
      ...data,
      user: user._id,
      starship: starship._id,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="preis">Price: </label>
      <input
        type="number"
        name="preis"
        id="preis"
        placeholder={credit}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
