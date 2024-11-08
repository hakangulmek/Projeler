import { TextField } from "@mui/material";
import { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaFileSignature } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

function NotePage() {
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingNote, setEditingNote] = useState("");

  const handleSave = () => {
    if (note.trim()) {
      setNoteList([...noteList, note]);
      setNote("");
    }
  };

  const handleDelete = (index: number) => {
    const newList = noteList.filter((_, i) => i !== index);
    setNoteList(newList);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditingNote(noteList[index]);
  };

  const handleEditSave = (index: number) => {
    const updatedList = noteList.map((n, i) => (i === index ? editingNote : n));
    setNoteList(updatedList);
    setEditingIndex(null);
    setEditingNote("");
  };

  return (
    <div>
      <div className="p-2">
        <h1 className="text-center text-3xl text-purple-950 ">Not Defteri</h1>
        <div className="pt-2">
          <TextField
            color="info"
            type="text"
            className="w-full"
            multiline
            maxRows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            label="Notunuzu giriniz"
          />
        </div>
        <div className="pt-4 flex justify-end">
          <button
            className="bg-purple-700 hover:bg-purple-950 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleSave}
          >
            Kaydet
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-center text-2xl text-purple-950">Notlar</h2>
        <div className="w-full h-full">
          <List className="pt-4 overflow-y-auto max-h-64 scrollbar-custom">
            {noteList.map((n, index) => (
              <ListItem key={index} divider>
                {editingIndex === index ? (
                  <TextField
                    fullWidth
                    value={editingNote}
                    onChange={(e) => setEditingNote(e.target.value)}
                    multiline
                    maxRows={4}
                  />
                ) : (
                  <ListItemText
                    primary={n}
                    primaryTypographyProps={{
                      className: "text-lg text-purple-950",
                    }}
                  />
                )}
                <div>
                  {editingIndex === index ? (
                    <button
                      onClick={() => handleEditSave(index)}
                      className="pt-10 pl-4"
                    >
                      <FaSave
                        size={20}
                        className="text-green-700 text-opacity-90"
                      />
                    </button>
                  ) : (
                    <>
                      <button
                        className="pr-4"
                        onClick={() => handleDelete(index)}
                      >
                        <RiDeleteBin5Fill
                          size={20}
                          className="text-red-700 text-opacity-90"
                        />
                      </button>
                      <button onClick={() => handleEdit(index)}>
                        <FaFileSignature
                          size={20}
                          className="text-blue-700 text-opacity-90"
                        />
                      </button>
                    </>
                  )}
                </div>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}

export default NotePage;
