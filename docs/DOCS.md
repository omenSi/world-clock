# Additional documentation

## Table of contents
- [Class diagram](##Class-diagram)
- [Deployment diagram](##Deployment-diagram)
- [Sequence diagrams](##Sequence-diagrams)
    - [Open settings](###Open-settings)
    - [Search for timezone](###Search-for-timezone)
    - [Select timezone](###Select-timezone)

## Class diagram

Class diagram of `WorldClock` widget source code. Descriptions are available in [here](./api/index.html).

![Source code class diagram](../images/detailed_class_diagram.png)

`Utils`, `Datatype`, `WorldClockError` and `Config` classes are used in almost every class, because they are sigleton classes, they do not need any dependancies, so its easy to import and use any required fields. However, in this class diagram, dependancy lines are only connected from `Clock` in order to show, that hey are used at least somewhere.

## Deployment diagram

Deployment diagram of `WorldClock` widget source code. `WorldClock` library sits independently of your `Frontend` package. It's importend into HTML code with `script` tag.

![Source code deployment diagram](../images/deployment_diagram.png)

## Sequence diagrams

Typical use cases like: *Open settings*, *Search for timezone*, *Select timezone* are covered with sequence diagrams. See attached images below.

### Open settings

![Sequence diagram for open settings use case](../images/sequence_open_settings.png)

### Search for timezone

![Sequence diagram for search for timezone use case](../images/sequence_search_for_timezone.png)

### Select timezone

![Sequence diagram for select timezone use case](../images/sequence_select_timezone.png)