# Drawbacks

* Using a basic constructor pattern can cause memory issues, for example the `toString` method on Person in the basicConstructor example is re-initialized everytime a new instance of a Person is created
  * Use prototypes to avoid this 