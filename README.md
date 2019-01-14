# AngularAjax

** Step 1 Create Project
** Step 2 Run

** Step 3 Add Module (Very Important)
```
    https://angular.io/guide/http
```

** Step 4 Update component
```
  constructor(private httpClient: HttpClient) {}
```


```
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    let obs1 = this.httpClient.get(url);

    obs1.subscribe();

    obs1.subscribe(function(data){});

    obs1.subscribe((data)=>{});

    obs1.subscribe((data)=>{
        this.refObj = data;
    });
```