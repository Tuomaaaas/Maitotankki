'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('rekognitions', [
      {
        rekognition_uuid: '10791fc6-097d-45c7-b979-841c88600772',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 3.5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        rekognition_uuid: 'd5a30e9a-4967-4651-aa5c-c0587751fde5',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 4.2,
        created_at: new Date(Date.now() - 10 * 60 * 1000),
        updated_at: new Date(Date.now() - 10 * 60 * 1000)
      },
      {
        rekognition_uuid: 'dbc63ab8-56bd-4b28-807e-40b64d730ce0',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 5.1,
        created_at: new Date(Date.now() - 20 * 60 * 1000),
        updated_at: new Date(Date.now() - 20 * 60 * 1000)
      },
      {
        rekognition_uuid: 'b4b09185-2301-43dc-9b2b-c1de54785981',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 6.3,
        flagged: true,
        created_at: new Date(Date.now() - 30 * 60 * 1000),
        updated_at: new Date(Date.now() - 30 * 60 * 1000)
      },
      {
        rekognition_uuid: '295592c4-d035-4183-a30f-f6ec569b00c6',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 7.0,
        flagged: true,
        created_at: new Date(Date.now() - 40 * 60 * 1000),
        updated_at: new Date(Date.now() - 40 * 60 * 1000)
      },
      {
        rekognition_uuid: 'd3836f32-6d7e-40e6-a178-0e2f7c8c2550',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 6.2,
        flagged: true,
        created_at: new Date(Date.now() - 50 * 60 * 1000),
        updated_at: new Date(Date.now() - 50 * 60 * 1000)
      },
      {
        rekognition_uuid: '09fc1ba3-948e-44d3-a901-2cf3609f7e51',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 5.4,
        created_at: new Date(Date.now() - 60 * 60 * 1000),
        updated_at: new Date(Date.now() - 60 * 60 * 1000)
      },
      {
        rekognition_uuid: 'fd121e89-cbdc-4af8-871e-56765c94a0dc',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 3.8,
        created_at: new Date(Date.now() - 70 * 60 * 1000),
        updated_at: new Date(Date.now() - 70 * 60 * 1000)
      },
      {
        rekognition_uuid: 'd94131e6-b50d-4f73-85dd-263c72d60bfc',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 4.8,
        created_at: new Date(Date.now() - 80 * 60 * 1000),
        updated_at: new Date(Date.now() - 80 * 60 * 1000)
      },
      {
        rekognition_uuid: '8000854e-ffa6-4349-b36d-32996b6b2a7f',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 2.9,
        created_at: new Date(Date.now() - 90 * 60 * 1000),
        updated_at: new Date(Date.now() - 90 * 60 * 1000)
      },
      {
        rekognition_uuid: '3afdb6e1-0dd7-4501-8f9c-9ab10ff1139f',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 0.5,
        flagged: true,
        created_at: new Date(Date.now() - 100 * 60 * 1000),
        updated_at: new Date(Date.now() - 100 * 60 * 1000)
      },
      {
        rekognition_uuid: '7d3d3f0e-5b7f-4695-b2b6-d90c2fc4e7a5',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 6.7,
        flagged: true,
        created_at: new Date(Date.now() - 110 * 60 * 1000),
        updated_at: new Date(Date.now() - 110 * 60 * 1000)
      },
      {
        rekognition_uuid: '5e4d3120-7e6b-46c5-91bb-8b7c869be5d2',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 5.5,
        created_at: new Date(Date.now() - 120 * 60 * 1000),
        updated_at: new Date(Date.now() - 120 * 60 * 1000)
      },
      {
        rekognition_uuid: 'd6a718e8-d2bb-4c9c-b3d3-88261480d2e4',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 3.3,
        created_at: new Date(Date.now() - 130 * 60 * 1000),
        updated_at: new Date(Date.now() - 130 * 60 * 1000)
      },
      {
        rekognition_uuid: '9e810dbd-154b-4412-beb7-526d800b640c',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 6.8,
        flagged: true,
        created_at: new Date(Date.now() - 140 * 60 * 1000),
        updated_at: new Date(Date.now() - 140 * 60 * 1000)
      },
      {
        rekognition_uuid: '68bdef15-19d8-4b2d-bba3-43f82de539c9',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 4.1,
        created_at: new Date(Date.now() - 150 * 60 * 1000),
        updated_at: new Date(Date.now() - 150 * 60 * 1000)
      },
      {
        rekognition_uuid: '23d43ae2-76c7-4375-8a8e-6627358c15f9',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 0.4,
        flagged: true,
        created_at: new Date(Date.now() - 160 * 60 * 1000),
        updated_at: new Date(Date.now() - 160 * 60 * 1000)
      },
      {
        rekognition_uuid: 'aa7d726f-7c30-4b22-a0fa-dba346d8e5fb',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 5.9,
        created_at: new Date(Date.now() - 170 * 60 * 1000),
        updated_at: new Date(Date.now() - 170 * 60 * 1000)
      },
      {
        rekognition_uuid: '4cfdd0ff-9789-4d6d-98c4-3ab6f37e8ec5',
        file_upload_id: 1,
        farm_id: 1,
        result: JSON.stringify({ 'TEST RESULT!': 'TEST RESULT!' }),
        temperature: 6.5,
        flagged: true,
        created_at: new Date(Date.now() - 180 * 60 * 1000),
        updated_at: new Date(Date.now() - 180 * 60 * 1000)
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('rekognitions', null, {});
  }
};
