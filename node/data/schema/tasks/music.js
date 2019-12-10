const mongoose = require('../../db/tasks/music');

const { Schema } = mongoose;
const musicListSchema = new Schema(
  {
    name: Number,
    items: {
      type: Array,
    },
  },
  {
    collection: 'list',
  },
);

const MusicListModel = mongoose.model('MusicList', musicListSchema);

module.exports = { MusicListModel };
