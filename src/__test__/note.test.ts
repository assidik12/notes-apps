import { describe, it, expect } from "@jest/globals";
import { createNote, getNotesByEmail, deleteNote, updateNote } from "../controller/notes";
import { Notebooks } from "../helpers/utils/interface.type";

const note: Notebooks = {
  title: "test",
  content: "test",
  userEmail: "sofi.sidik1234@gmail.com",
  createdAt: new Date(),
};

describe("uwer controller test", () => {
  it("create note", async () => {
    const result = await createNote(note);
    expect(result).toBeDefined();
  });
  it("get note", async () => {
    const result = await getNotesByEmail("sofi.sidik23@gmail.com");
    expect(result).toBeDefined();
  });
  it("update note", async () => {
    const updated = {
      title: "test12345",
      content: "test",
      userEmail: "sofi.sidik@gmai.com",
    };
    const result = await updateNote(updated);
    expect(result).toBeDefined();
  });
});
