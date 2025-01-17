import { RequestHandler } from 'express';
import  Note, { NoteDocument } from '../models/node'

export interface IncomingBody {
    title: string;
    description?: string;
  }


export const create : RequestHandler = async (req, res) => {
    // const newNote = new Note<NoteDocument>({
    //   title: (req.body as IncomingBody).title,
    //   description: (req.body as IncomingBody).description,
    // });
  
    // await newNote.save();
  
    const newNote = await Note.create<NoteDocument>({
      title: (req.body as IncomingBody).title,
      description: (req.body as IncomingBody).description,
    });
  
    res.json({ note :{id: newNote._id , title: newNote.title , desciption:newNote.description } });
  }

  export const updateSingleNote : RequestHandler =  async (req, res) => {
    const { noteId } = req.params;
    // // const note = await Note.findById(noteId);
    // // if (!note) return res.json({ error: "Note not found!" });
  
    const { title, description } = req.body as IncomingBody;
    // // if (title) note.title = title;
    // // if (description) note.description = description;
  
    // const note = await Note.findByIdAndUpdate(
    //   noteId,
    //   { title, description },
    //   { new: true }
    // );
    // if (!note) return res.json({ error: "Note not found!" });
  
    const note = await Note.findByIdAndUpdate(noteId , {title , description} , {new : true})
      if (!note) return res.json({ error: "Note not found!" });
    // await note.save();
  
    res.json({ note: {
      id:note._id,
      title:note.title,
      description:note.description,
    }  });
  }

export const removeSingleNote : RequestHandler =  async (req, res) => {
    const { noteId } = req.params;
  
    const removeNote = await Note.findByIdAndDelete(noteId)
  
    if(!removeNote) return res.json({error: "could not  remove note!"}) 
  
    res.json({Message: "note removed successfully."})
  } 
  export const getAllNotes : RequestHandler = async (req , res) =>{
    const notes = await Note.find()
    res.json({notes:notes.map((note) =>{
      return {
        id:note._id,
        title:note.title,
        description:note.description
      }
    })
    });
  };
  export const getSingleNote: RequestHandler =  async (req , res) =>{
    const {id} = req.params
    const notes = await Note.findById(id);
    if(!notes) return res.json({error:"Node not found"})
    res.json({notes})
   }
