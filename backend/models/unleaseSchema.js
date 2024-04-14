import { mongoose } from "mongoose";

const unleaseSchema = mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    subLocation: {
      type: String,
      require: true,
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
    rating: {
      type: Number,
    },
    views: {
      type: Number,
    },
    popularity: {
      type: String,
      required: true,
    },
    popularPlaces: [
      {
        Mname: String,
        Mdescription: String,
        Mlikes: Number,
        Mcomments: Number,
        Mimage: [],
        MsubLocation: String,
      },
      {
        Mname: String,
        Mdescription: String,
        Mlikes: Number,
        Mcomments: Number,
        Mimage: [],
        MsubLocation: String,
      },
      {
        Mname: String,
        Mdescription: String,
        Mlikes: Number,
        Mcomments: Number,
        Mimage: [],
        MsubLocation: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const unleaseModel = mongoose.model("unlease", unleaseSchema);

export default unleaseModel;
