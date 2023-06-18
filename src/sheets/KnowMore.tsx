import Container from "../components/Container";
import { heading } from "../assets/vars";
function KnowMore() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className={`${heading}`}>Welcome to Knowing me More.</h1>
      </div>
      <Container>
        <h1 className={`${heading}`}>Projects</h1>
        <h1 className={`${heading}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          distinctio totam perferendis unde, rerum omnis! Vel id ab velit culpa
          accusantium dignissimos sunt sapiente, asperiores ut, quia molestias
          dicta fuga.
        </h1>
      </Container>
    </div>
  );
}

export default KnowMore;
