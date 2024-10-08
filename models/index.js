const sequelize = require('../config/connection');
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Define associations
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Post, Comment };
