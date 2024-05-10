import { createNote, getNotesByEmail, deleteNote, updateNote } from "../controller/notes";
import { Notebooks } from "../helpers/utils/interface.type";
export const Createnote = async (params: Notebooks) => {
  const result = await createNote(params);
  if (result.status === 200) {
    return {
      result: result.result,
      succes: true,
      status: result.status,
    };
  } else {
    return {
      result: result.result,
      succes: false,
      status: result.status,
    };
  }
};

export const GetNotes = async (email: string) => {
  const result = await getNotesByEmail(email);
  if (result.status === 200) {
    return {
      result: result.result,
      succes: true,
      status: result.status,
    };
  } else {
    return {
      result: result.result,
      succes: false,
      status: result.status,
    };
  }
};

export const Updatenote = async (params: Notebooks) => {
  const result = await updateNote(params);
  if (result.status === 200) {
    return {
      result: result.result,
      succes: true,
      status: result.status,
    };
  } else {
    return {
      result: result.result,
      succes: false,
      status: 403,
    };
  }
};

export const DeleteNote = async (id: number) => {
  const result = await deleteNote(id);
  if (result.status === 200) {
    return {
      result: result.result,
      succes: true,
      status: result.status,
    };
  } else {
    return {
      result: result.result,
      succes: false,
      status: 403,
    };
  }
};
