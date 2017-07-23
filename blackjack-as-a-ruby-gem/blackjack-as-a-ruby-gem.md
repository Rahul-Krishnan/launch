### Introduction

It's now time to put your knowledge of Gem creation to work! Your task is to
take your code submission from [this assignment](/lessons/blackjack), and bundle
it up into a Ruby Gem.


### Getting Started

Use the following command to initialize a Ruby Gem in the correct folder:

```no-highlight
$ et get blackjack-as-a-ruby-gem
$ cd blackjack-as-a-ruby-gem
$ bundle gem blackjack --test=rspec
```


### Tips

#### Use a Namespace

Create a `Blackjack` module and put all of your classes within this module.


#### Make it Executable

Give the users of your Blackjack app a way to run your Gem. Create an `exe`
folder, and create a `blackjack` Ruby script:

```ruby
#!/usr/bin/env ruby
require_relative "../blackjack"

Blackjack::Game.start
```

Make this file executable: `$ chmod +x exe/blackjack`

Indicate that this is how users will execute your application:

```ruby
# blackjack.gemspec

Gem::Specification.new do |spec|
  # ...
  spec.executables   = "blackjack"
  # ...
end
```

Test it out with the `$ ./exe/blackjack` command.


#### Write Tests

Unit tests are an excellent way to validate that your classes are functioning
the way you expect. Take the time to refactor your code so that it is easier to
test. Instead of `puts`ing data from methods, have your methods return a string.


#### Make it Unique

When you are ready to publish your Gem to RubyGems.org, you will need to give
your Gem a unique name. Sadly, the `blackjack` Gem name has already been taken.

In your `blackjack.gemspec` file, suffix the Gem with your initials or your
GitHub handle:

```ruby
# blackjack.gemspec

Gem::Specification.new do |spec|
  spec.name          = "blackjack_radavis"
  # ...
end
```

Make use of the [colorize](https://github.com/fazibear/colorize) and
[artii](https://github.com/miketierney/artii) Gems to style your app. You could
go as far as creating your own class for generating cards using
[ASCII-art](https://en.wikipedia.org/wiki/ASCII_art).

Make it your own!


#### Reference Examples

Learning by example is a great way to get past a roadblock. Utilize the
`bundle open gemname` command, as well as the
[commit history](https://github.com/LaunchAcademy/markdown_explorer/commits/master)
of the MarkdownExplorer Gem to see how other Gems are structured.
