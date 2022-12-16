@FeatureA
Feature: Heroku app Login Scenario

    #ctrl + / npm run wdio
    # Scenario: Successfully login using correct username password
    #     Given I am on the front page
    #     When I try to login with correct credential
    #     Then I am successfully logged in

    # Scenario: Login with parameterized data
    #     Given I am on the front page
    #     When I try to login with username "hendri.antomy" and password "1234"
    #     Then I am successfully logged in with username "hendri.antomy"

    # Scenario Outline: Login with scenario outline
    #     Given I am on the front page
    #     When I try to login with username "<username>" and password "<password>"
    #     Then I am successfully logged in with username "<username>"
    #     Examples:
    #         | username        | password |
    #         | hendri.antomy   | 1234     |
    #         | wibowo.bullseye | bullseye |

  #  @AddToCart @Positive @C001
    Scenario: Add Item to Cart
        Given I am on the front page
        When I try to login with username "rasyid" and password "indramayu"
        Then I am successfully logged in with username "rasyid"
        When I add item "Samsung galaxy s6" to cart
        When I am successfully logout
       # When I add item "Nokia lumia 1520" to cart
       # When I add these items to cart:
        #|itemName           | quantity|
        #Samsung galaxy s6  | 1       |
       # |Nokia lumia 1520   | 1       |
       # |HTC One M9         | 1       |

   # @Login @Positive @C002
    #Scenario: Login with valid data
     #   Given I am on the front page
      #  When I try to login with username "rasyid" and password "indramayu"
       # Then I am successfully logged in with username "rasyid"
