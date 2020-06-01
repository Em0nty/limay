var APP_DATA = {
  "scenes": [
    {
      "id": "0-dormitorio",
      "name": "Dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.04296195081831833,
        "pitch": 0.050033854397156574,
        "fov": 1.3861230773731033
      },
      "linkHotspots": [
        {
          "yaw": 2.5981187730929722,
          "pitch": 0.25455552634732115,
          "rotation": 6.283185307179586,
          "target": "1-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.6625996760500268,
        "pitch": 0.03340561642613693,
        "fov": 1.3861230773731033
      },
      "linkHotspots": [
        {
          "yaw": 2.230053823291076,
          "pitch": 0.3579249925759065,
          "rotation": 0,
          "target": "2-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.6686303395514841,
        "pitch": 0.09881621098180915,
        "fov": 1.3861230773731033
      },
      "linkHotspots": [
        {
          "yaw": 0.23986262494337574,
          "pitch": 0.39233534776074563,
          "rotation": 0,
          "target": "1-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
