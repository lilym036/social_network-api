const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend,
  } = require('../../controllers/userController.js');
  
  // /api/users
  router.route('/').get(getUsers).post(createUser);
  
  // /api/users/:userId
  router.route('/:userId').get(getSingleUser);

  router.route('/:userId').put(updateUser);

  //api/users/:userId
router.route('/:userId').delete(deleteUser);

// /api/users/:userId/friends/:friendId 
router.route('/:userId/friends/:friendId').post(addFriend);

router.route('/:userId/friends/:friendId').delete(deleteFriend);
  


module.exports = router;