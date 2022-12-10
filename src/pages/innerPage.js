export default function renderInnerPage() {
  const markup = `
    <div class="dashboard-container">
      <div>
        <h1>This is the inner page</h1>
        <button id="signOutButton" class="button">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          Sign out
        </button>
      </div>
      <div>
        <input type="text" id="dataToAdd" placeholder="data to add" class="data-to-add">
        <button id="addData" class="button">Add data</button>
        <button id="getData" class="button">Get data</button>
      </div>
      <div id="results"></div>
    <div>
  `;
  document.querySelector('#root').innerHTML = markup;
}
