import { getImageURL } from "./utils";

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageURL(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// export default function Profile() {
//   return (
//     <div>
//       <Avatar person={{ name: "Aklilu Lemma", imageID: "OKS67lh" }} size={80} />
//       <Avatar person={{ name: "Lin Lanying", imageID: "1bX5QH6" }} size={100} />
//       ;
//     </div>
//   );
// }
