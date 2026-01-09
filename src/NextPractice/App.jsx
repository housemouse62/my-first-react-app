import { useState } from "react";
import { letters } from "../NextPractice/data.jsx";
import Letter from "../NextPractice/Letter.jsx";

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);
  console.log(selectedIds);

  // TODO: allow multiple selection
  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    //const toToggle = letters.find((cosa) => cosa.id === toggledId);
    if (selectedIds.includes(toggledId)) {
      setSelectedIds(selectedIds.filter((id) => id !== toggledId));
    } else {
      setSelectedIds([...selectedIds, toggledId]);
    }
    // TODO: allow multiple selection

    console.log(toggledId);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
