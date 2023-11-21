module.exports = (sequelize, DataTypes) =>{
  const Course = sequelize.define("Course",{
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    studentID:{
      type: DataTypes.INTEGER
    },
    subjectID:{
      type: DataTypes.INTEGER
    }
  })

  return Course
}