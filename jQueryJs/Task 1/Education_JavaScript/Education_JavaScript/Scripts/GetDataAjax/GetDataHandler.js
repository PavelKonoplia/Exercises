$(document).ready(function () {
    (function () {

        function GetDataHandler() {

            $('#btnGetData').click(function () {
                resolve(false);
            });

            $('#btnGetDataWithError').click(function () {
                resolve(true);
            });

            function resolve(includeError) {
                jQuery.get("Home/GetData", { withError: includeError })
                    .done(function (data) {
                        setData(JSON.parse(JSON.stringify(data)));
                    })
                    .fail(function () {
                        alert("GetData request failed");
                    });
            }

            function setData(user) {
                $('#id').html(user.Id);
                $('#name').html(user.Name);
                $('#age').html(user.Age);
                user.Sex === 0
                    ? $('#male').attr('checked', true)
                    : $('#female').attr('checked', true);
            }
        }

        this.GetDataHandler = new GetDataHandler();
    })();
});
