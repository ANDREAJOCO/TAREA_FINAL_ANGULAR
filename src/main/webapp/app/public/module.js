var module = angular.module('mpApp.public', ['mpApp.ui','ui.router','ngResource']);

module.constant('comm',{
    url : '/TAREA_FINAL_ANGULAR/rest'
});

module.config(function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/')
	$stateProvider.state('public', {
            abstract : true,
            data : {
                title : 'MP Enterprise'
            }
        });

        $stateProvider.state('public.home', {
            url : '/home',
            data : {
                title : 'Home'
            },
            views : {
                "root@app" : {
                    templateUrl : 'app/public/home/home.html',
                    controller : 'homeController',
                    controllerAs : 'vm'
                }
            },
         
        });
            

	$stateProvider.state('public.tareas', {
        url : '/tareas',
        data : {
            title : 'Tareas'
        },
        views : {
            "root@app" : {
                templateUrl : 'app/public/tareas/tarea.html',
                controller : 'searchTareaController',
                controllerAs : 'vm'
            }
        },
        resolve: { 
        	searchPostFiles: function($ocLazyLoad) {
                     return $ocLazyLoad.load(['app/public/tareas/TareaResource.js',
                         'app/public/tareas/tareaController.js',
                         'app/public/categorias/categoriaResource.js']);
            }
        }
    });
        
    $stateProvider.state('public.tareas.new', {
        url : '/new',
        views : {
            "root@app" : {
                templateUrl : 'app/public/tareas/TareasDes.html',
                controller : 'newTareaController',
                controllerAs : 'vm'
            }
        }
	});
	
	$stateProvider.state('public.tareas.edit', {
        url : '/update/:id',
        views : {
            "root@app" : {
                templateUrl : 'app/public/tareas/TareasDes.html',
                controller : 'editTareaController',
                controllerAs : 'vm'
            }
        }
	});
	
	$stateProvider.state('public.categorias', {
        url : '/categorias',
        views : {
            "root@app" : {
                templateUrl : 'app/public/categorias/categoria.html',
                controller : 'searchCategoriaController',
                controllerAs : 'vm'
            }
        },
        resolve: { 
        	searchPostFiles: function($ocLazyLoad) {
                     return $ocLazyLoad.load(['app/public/categorias/categoriaResource.js',
                    	 'app/public/categorias/categoriaController.js']);
            }
        }
	});
        
    $stateProvider.state('public.categorias.new', {
        url : '/new',
        views : {
            "root@app" : {
                templateUrl : 'app/public/categorias/categoriaDetalle.html',
                controller : 'newCategoriaController',
                controllerAs : 'vm'
            }
        }
	});
    
    $stateProvider.state('public.categorias.edit', {
        url : '/update/:id',
        views : {
            "root@app" : {
                templateUrl : 'app/public/categorias/categoriaDetalle.html',
                controller : 'editCategoriaController',
                controllerAs : 'vm'
            }
        }
	});
});
