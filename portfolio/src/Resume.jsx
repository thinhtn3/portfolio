import resume from "./assets/resume.pdf";

export default function Resume() {
  return (
    <>
      <h1 style={{ fontSize: "2.5em", margin: "1.5em 2.5em" }}>Resume</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <embed src={resume} type="" style={{width:"50vw", height:"80vh"}} />
      </div>
    </>
  );
}
