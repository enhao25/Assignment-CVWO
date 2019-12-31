# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# SAMPLE_TAGS = [
#     {
#         name: "Exercise"
#     },
#     {
#         name: "Important"
#     }
# ]

# SAMPLE_TAGS.each do |task|
#     Tag.create(task)
# end

SAMPLE_TASK = [
    {
        description: 'Buy Food',
        active: true,
        tags_id: ""
    },
    {
        description: 'Pay Bills',
        active: false,
        tags_id: 1
    },
    {
        description: 'Buy Eggs',
        active: false,
        tags_id: ""
    }
]

SAMPLE_TASK.each do |task|
    Task.create(task)
end