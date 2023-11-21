module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define("Subject", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    subjectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    baseTuition: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    }
  })

  return Subject
}