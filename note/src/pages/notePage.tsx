import { TextField } from "@mui/material";
import { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
function NotePage() {
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState<string[]>([]);

  const handleSave = () => {
    if (note.trim()) {
      setNoteList([...noteList, note]);
      setNote("");
    }
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
                <ListItemText
                  primary={n}
                  primaryTypographyProps={{
                    className: "text-lg text-purple-950",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}

export default NotePage;
