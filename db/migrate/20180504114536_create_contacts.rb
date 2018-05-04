class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :username
      t.string :relation
      t.string :instagram
      t.string :twitter
      t.string :facebook
      t.string :email
      t.string :phone
      t.string :street
      t.string :city
      t.string :zip
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
