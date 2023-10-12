export default function Universe() {
  const bigGroupRadius = 80;

  function angle(n) {
    return (2 * Math.PI * n) / 5;
  }
  return { bigGroupRadius, angle };
}
