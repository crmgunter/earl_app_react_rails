# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Shift.destroy_all
Employee.destroy_all

monday = Shift.create!(date: "05/21/2018", time: "AM", note: "This is a note")
tuesday = Shift.create!(date: "05/22/2018", time: "AM", note: "This is a note")

cam = Employee.create!(name: "Cameron", position: "Fry", shift_id: monday.id, phone: "7707730154", photo: "https://placecage.com/200/200")
wade = Employee.create!(name: "Wade", position: "manager", shift_id: monday.id, phone: "1234567890", photo: "https://placecage.com/200/200")
gage = Employee.create!(name: "Gage", position: "Fry", shift_id: monday.id, phone: "0987654321", photo: "https://placecage.com/200/200")

allen = Employee.create!(name: "Allen", position: "Fry", shift_id: tuesday.id, phone: "5432167890", photo: "https://placecage.com/200/200")
tyler = Employee.create!(name: "Tyler", position: "Day cook", shift_id: tuesday.id, phone: "0987612345", photo: "https://placecage.com/200/200")
