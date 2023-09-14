export default function ProfileInput() {
  return (
    <div className="grid grid-cols-2">
      <label htmlFor="firstName">First name*</label>
      <input type="text" id="firstName" />
    </div>
  );
}
