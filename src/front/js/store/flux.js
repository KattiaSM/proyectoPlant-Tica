const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userLogged: false,
			search_option: "",
			search_result_api: "",
			search_result_3rd_api: "",
			token: "",
			id: "",
			userLogged: false,
			sci_names_temporal: [
				"quercus rotundifolia",
				"sabila",
				"cas moreno",
				"flor del ocaso",
				"no se que poner aqui"
			],
			message: null,
			charge_todos: true,
			initial_plant_name: "Aquí aparecerá el nombre de tu planta",
			info_create_todos: [["Tu tarea"], [""], ["Horas"]],
			initial_img_url:
				"https://64.media.tumblr.com/9e0731c5fd8e97d29a6f1f6928355572/tumblr_p2zkqfzA4B1wxub9uo1_1280.gifv",
			name: "Aquí aparecerá el nombre de tu planta",
			todos: [
				[
					{ plant_name: "Realiza listas de tareas" },
					{ plant_url: "https://media1.giphy.com/media/3ohs4i3JaSelQpFYVW/giphy.gif" },

					{
						tasks: [
							{ task: "Agua", freq: 24, type: "Horas" },
							{ task: "Abono", freq: 24, type: "Horas" }
						]
					}
				],
				[
					{ plant_name: "Cuidá tus plantas" },
					{
						plant_url:
							"https://ecoosfera.com/wp-content/imagenes/2020/11/plantas-time-lapse-movimiento-vida.gif"
					},

					{
						tasks: [
							{ task: "Sustrato", freq: 24, type: "Horas" },
							{ task: "Amor <3", freq: 24, type: "Horas" }
						]
					}
				],
				[
					{ plant_name: "Llevá el conteo de tus plantas" },
					{
						plant_url: "https://media2.giphy.com/media/3o6ZtaClRw5uXz18JO/giphy.gif"
					},
					{
						tasks: [
							{ task: "Luz", freq: 24, type: "Horas" },
							{ task: "Enraizante", freq: 24, type: "Horas" }
						]
					}
				]
			],
			plants: [
				{
					name: "Chile Jalapeño",
					scientName: "Capsicum annuum var",
					fullScientName: "Lorem Ipsum algo mas",
					year: "2000",
					category: "Planta"
				},
				{
					name: "Chile Poblano / Chile Ancho",
					scientName: "Capsicum annuum var",
					fullScientName: "Lorem Ipsum algo mas",
					year: "2000",
					category: "Planta"
				},
				{
					name: "Chile Habanero Manzano",
					scientName: "Capsicum annuum var",
					fullScientName: "Lorem Ipsum algo mas",
					year: "2000",
					category: "Planta"
				},
				{
					name: "Chile Güero Húngaro Variedad Santa Fe",
					scientName: "Capsicum annuum var",
					fullScientName: "Lorem Ipsum algo mas",
					year: "2000",
					category: "Planta"
				},
				{
					name: "Betabel Remolacha",
					scientName: "Beta vulgaris",
					fullScientName: "Lorem Ipsum algo mas",
					year: "2000",
					category: "Planta"
				},
				{
					name: "Cabeza Larga",
					scientName: "Curcubita pepo",
					fullScientName: "Lorem Ipsum algo mas",
					year: "2000",
					category: "Planta"
				},
				{
					name: "Cebolla Amarilla",
					scientName: "Allium cepa",
					fullScientName: "Lorem Ipsum algo mas",
					year: "2000",
					category: "Planta"
				},
				{
					name: "Crisantemo Gigante Blanco",
					scientName: "Leucanthemum maximum",
					fullScientName: "Lorem Ipsum algo mas",
					year: "2000",
					category: "Planta"
				},
				{
					name: "Girasol Belleza de Otoño Variado",
					scientName: "Helianthus decapetalus",
					fullScientName: "Lorem Ipsum algo mas",
					year: "2000",
					category: "Planta"
				}
			],

			favs: [
				{
					scientific_name: "Quercus Rotundifolia",
					data1: "Roble de Hoja Perenne",
					data2: "1785",
					data3: "Fagaceae",
					data4: "Quercus rotundifolia f. dolichocalyx",
					url: "https://bs.plantnet.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30"
				},
				{
					scientific_name: "Urtica-diotica",
					data1: "Ortiga",
					data2: "1753",
					data3: "Urticaceae",
					data4: "Urtica haussknechtii",
					url: "https://bs.plantnet.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248"
				},
				{
					scientific_name: "Dactylis glomerata",
					data1: "Pastos de la huerta",
					data2: "1753",
					data3: "Poaceae",
					data4: "Dactylis glomerata subsp. himalayensis",
					url: "https://bs.plantnet.org/image/o/428f40dadfa0281dc890ead17fcd07882f9efb09"
				},
				{
					scientific_name: "Festuca rubra",
					data1: "Festuca roja",
					data2: "1753",
					data3: "Fagaceae",
					data4: "Quercus rotundifolia f. dolichocalyx",
					url: "https://bs.plantnet.org/image/o/0b932c8a275efc79f473a71bec20d6f15e9b6b90"
				},
				{
					scientific_name: "Plantago lanceolata",
					data1: "Plátano de hoja estrecha",
					data2: "1753",
					data3: "Poaceae",
					data4: "Festuca austrodolomitica",
					url: "https://bs.plantnet.org/image/o/78a8374f009e6ed2dc71ca17d18e4271ea0a2a7b"
				},
				{
					scientific_name: "Quercus robur",
					data1: "Roble inglés",
					data1: "1753",
					data3: "Fagaceae",
					data4: "Quercus robur subsp. broteroan",
					url: "https://bs.plantnet.org/image/o/2292b670683abdaac354389514105df0018d9ef8"
				}
			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			changeName: name_doc => {
				const store = getStore();
				if (name_doc == "" || name_doc == undefined) {
					setStore({ name: store.initial_plant_name });
				} else {
					setStore({ name: name_doc });
				}
			},
			changeInitialName: name_doc => {
				setStore({ initial_plant_name: name_doc });
			},
			changeInitialURL: plant_url => {
				setStore({ initial_img_url: plant_url });
			},
			changeChargeValue: value => {
				if (value === false) {
					setStore({ charge_todos: true });
				} else {
					setStore({ charge_todos: false });
				}
			},
			changeSearchValue: search_item => {
				let search_temporal = search_item;
				setStore({ search_option: search_temporal });
			},
			doSearch: async () => {
				const store = getStore();
				//Filtrado de búsqueda en la bases de datos interna
				let internal_data_result = "";
				function filterItems(query) {
					return store.sci_names_temporal.filter(function(el) {
						return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
					});
				}
				internal_data_result = filterItems(store.search_option);

				setStore({ search_result_api: internal_data_result });
				//Búsqueda en API de terceros
				/* 
				El API considera los espacios como %20, las siguiente líneas
				adaptan el string para que sea legible en el API de terceros
				ejemplo: "hola adios" pasaría a ser "hola%20adios" y así se le envía al API
				*/

				let adapted_string = "";

				for (let i = 0; i < store.search_option.length; i++) {
					if (store.search_option[i] === " ") {
						adapted_string = adapted_string + "%20";
					} else {
						adapted_string = adapted_string + store.search_option[i];
					}
				}

				//Una vez arreglado el string hay que adaptar el url para la búsqueda
				//La búsqueda la hace el API de terceros y retorna la info de los elementos coincidentes
				const url = "https://api.inaturalist.org/v1/search?q=" + adapted_string + "&sources=taxa";

				let api_3rd_res = "";

				const loadTodo = () => {
					fetch(url, {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					})
						.then(res => res.json())
						.then(data => {
							console.log("data--->", data.results);
							//api_3rd_res = data.results;
							setStore({ search_result_3rd_api: data.results });
						})
						.catch(error => console.error("Error:", error.message));
				};

				loadTodo();

				// fetch(url, {
				// 	method: "GET",
				// 	headers: {
				// 		"Content-Type": "application/json"
				// 	}
				// })
				// 	.then(response => {
				// 		api_3rd_res = response.json();
				// 		console.log("indicador", api_3rd_res);
				// 	})
				// 	.then(data => {})
				// 	.catch(error => {
				// 		alert("no hay suficientes parámetros");
				// 	});
				console.log("dato actualizado", api_3rd_res);
				setStore({ search_result_3rd_api: api_3rd_res });
			},
			deleteFav: index => {
				const store = getStore();
				let temporal = store.favs;
				temporal.splice(index, 1);
				setStore({ favs: temporal });
			},
			addFav: item => {
				let temporal = getStore().favs;
				temporal.unshift(item);
				setStore({ favs: temporal });
			},
			deleteTodo: index => {
				const store = getStore();
				let temporal = store.todos;
				if (temporal.length > 1) {
					console.log(index);
					temporal.splice(index, 1);
					setStore({ todos: temporal });
				} else {
					console.log(temporal.lenght);
					alert("Lo sentimos, debe tener almenos una lista de tareas disponible.");
				}
			},
			modifyTodos: control => {
				const store = getStore();
				let final_array = store.todos;
				final_array.unshift(control);
				setStore({ todos: final_array, charge_todos: true });
			},

			logout: () => {
				localStorage.setItem("x-access-token", null);
				sessionStorage.removeItem("token");
				setStore({ userLogged: false });

				// Se configura la opción del home
				getActions().activeOption("/login");

				ShowAlert("top-end", "success", "", "¡Sesión cerrada exitosamente!", false, true, 2000);
			},

			moveDataToModify: control => {
				let temporal = control;
				let tasks = [];
				let freq = [];
				let type = [];

				temporal.map((item, index) => {
					tasks.push(item.task);
					freq.push(item.freq);
					type.push(item.type);
				});
				setStore({ info_create_todos: [tasks, freq, type] });
			},
			restoreDataToModify: url => {
				let url_temporal = url;
				setStore({
					initial_img_url: url_temporal
				});
				setStore({ info_create_todos: [["Tu tarea"], [""], ["Horas"]] });
			},
			savingToken: (int_token, int_id) => {
				sessionStorage.setItem("token", int_token);
				setStore({ token: int_token });
				setStore({ id: int_id });
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadProfile: async () => {
				// Se obtiene los datos del profile
				let localStorageProfile = localStorage.getItem("profileAPI");

				if (localStorageProfile === null || localStorageProfile === undefined) {
					// Si localStorage NO existe, entonces se cargan los datos de la API.
					const url = "https://3001-jade-galliform-3jxw3pmu.ws-us04.gitpod.io/api/users";
					const response = await fetch(url);
					const data = await response.json();
					setStore({ profile: data });

					localStorage.setItem("profileAPI", JSON.stringify(data));
				} else {
					// Si localStorage SI existe, entonces se cargan los datos de la variable local, para no volver a realizar Request.
					setStore({ profile: JSON.parse(localStorageProfile) });
				}
			}
		}
	};
};

export default getState;
