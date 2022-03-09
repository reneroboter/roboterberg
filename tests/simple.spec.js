import {
    createNewPost,
    enablePageDialogAccept,
    insertBlock,
    getEditedPostContent
} from "@wordpress/e2e-test-utils";
describe('Simple block', () => {
    beforeAll(async () => {
        await enablePageDialogAccept();
    });
    beforeEach(async () => {
        await createNewPost();
    })

    it('Simple block should be available', async () => {
        await insertBlock('René Roboters Block');

        expect(await page.$('[data-type="roboterberg/simple"]')).not.toBeNull();

        expect(await getEditedPostContent()).toMatchSnapshot();
    });
})

