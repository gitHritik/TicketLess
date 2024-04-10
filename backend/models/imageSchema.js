import { mongoose } from "mongoose";

const imgageSchema = mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    museumName: {
      type: String,
      required: true,
    },
    locationImage: [],
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
    },
    comment: {
      type: Number,
    },
    popularPlaces: [
      {
        Mname: String,
        Mdescription: String,
        Mlikes: Number,
        Mcomments: Number,
        Mimage: String,
      },
      {
        Mname: String,
        Mdescription: String,
        Mlikes: Number,
        Mcomments: Number,
        Mimage: String,
      },
      {
        Mname: String,
        Mdescription: String,
        Mlikes: Number,
        Mcomments: Number,
        Mimage: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const imageModel = mongoose.model("scroller", imgageSchema);

export default imageModel;
