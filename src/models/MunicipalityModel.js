import mongoose from 'mongoose'

const { Schema } = mongoose

const municipalitySchema = Schema(
  {
    code: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    cantons: {
      type: Number,
      required: true
    },
    postal_code: {
      type: String,
      required: true
    }
  },
  { timestamps: true, versionKey: false }
)
municipalitySchema.methods.toJSON = function () {
  var obj = this.toObject()
  delete obj.createdAt
  delete obj.updatedAt
  return obj
}
/* Creating a model called MunicipalityModel. */
const MunicipalityModel = mongoose.model('Municipality', municipalitySchema)
export default MunicipalityModel
