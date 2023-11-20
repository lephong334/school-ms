module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  return Student
}
