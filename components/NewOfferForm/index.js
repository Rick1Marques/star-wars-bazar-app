export default function NewOfferForm({ credit, id }) {
  return (
    <form>
      <label htmlFor="price">Price: </label>
      <input
        type="number"
        name="price"
        id="price"
        placeholder={credit}
        required
      />
    </form>
  );
}
