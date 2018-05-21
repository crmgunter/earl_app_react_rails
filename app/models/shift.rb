class Shift < ApplicationRecord
    has_many :employees, dependent: :destroy
end
