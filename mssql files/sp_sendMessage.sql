-- =============================================
-- Author:      Disha Ramrakhyani
-- Create date: 17/11/2022
-- Description: like a comment
-- Parameters:
--				@sentFromID - ID of the user sending the message
--				@sentToID - ID of the user recieving the message
--				@messageContent- string message to be sent
--				@mediaContent- images/videos to be sent

-- Example: EXEC [theGram].[sp_sendMessage] 2,1,'hii','' 
-- Change History:
-- =============================================

CREATE PROCEDURE [theGram].[sp_sendMessage]
	@sentFromID int,
	@sentToID int,
	@messageContent int,
	@mediaContent int
AS
BEGIN
	INSERT INTO [theGram].[messages]
	(
		[sentFromID],
		[sentToID],
		[messageContent],
		[mediaContent]
	)
	values
	(
		@sentFromID,
		@sentFromID,
		@messageContent,
		@mediaContent
	)
END
