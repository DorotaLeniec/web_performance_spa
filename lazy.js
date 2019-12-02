let eventEmitter;
let componentLoaded;

const LazyLoadListen = [
  dispatch => {
    eventEmitter = new EventTarget();
    componentLoaded = new Event("loaded");
    eventEmitter && eventEmitter.addEventListener("loaded", function () {
      dispatch(state => ({...state}));
    });
  }
];

function lazy(loader, placeholder = "") {
  let component;

  const LazyComponent = params => {
    if (!component) {
      loader().then(module => {
        component = module.default;
        eventEmitter && eventEmitter.dispatchEvent(componentLoaded);
      });
    }

    return component ? component(params) : placeholder;
  };

  return LazyComponent;
}

export {lazy, LazyLoadListen};