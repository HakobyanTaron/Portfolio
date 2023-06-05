import Header from "./../components/header/Header";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, SASS, BootStrap
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
