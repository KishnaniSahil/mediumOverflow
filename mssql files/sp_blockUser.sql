-- =============================================
-- Author:      Disha Ramrakhyani
-- Create date: 14/11/2022
-- Description: Comment on a post
-- Parameters:
--				@userID- ID of the user
--				@blockedUserID- ID of another user that the user wishes to block		
     
-- Example: EXEC [theGram].[sp_blockUser] 2, 1
-- Change History:
-- =============================================

CREATE PROCEDURE [theGram].[sp_blockUser]
	@userID int,
	@blockedUserID int
AS
BEGIN 
	INSERT INTO [theGram].[blocklist] values
	(@userID, @blockedUserID)
END
