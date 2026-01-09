import Avatar from "./PassingProps";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ name: "Katsuko Saruhashi", imageID: "YfeOqp2" }}
      />
    </Card>
  );
}
