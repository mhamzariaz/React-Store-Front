# Feature: cart

# Scenario: Item is added to cart when the button clicked
# Given that, I selected an item from the displayed list.
# And I clicked the add to cart button. 
# Then the "Item added to cart".



Scenario Outline: Item is displayed to cart list when the view cart button
Given that "<Product>" added in the cart
When I click view cart icon
Then The cart page is displayed
And I'll be able to view all products in "<Cart List>"
Examples:
    | Product | Cart List |
    | Product 4  | Product 4  |


# Scenario Outline: Remove product from cart
# Given that "<Product>" added in the cart
# When I click remove button from any "<Product>" in the cart list
# Then the "<Product>" remove from the Cart List
# Examples:
#     | <Product> |
#     | Product 1  |

# Scenario Outline: Increase Product Quantity in Cart
# Given that "<Product>" added in the cart 
# When I click on + button in front of product to increase "<Quantity>"
# Then the "<Updated Quantity>" of that product must be increase by 1

# Examples:
#     | Product 1 | Quantity  | Updated Quantity |
#     | Product 1  | 1  | 2  |