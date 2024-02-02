const Announce = `
<mj-wrapper>

	<mj-section>
		<mj-column padding="10px 0 10px 0">
            <mj-text font-size="18px" padding-bottom="8px">Приглашаем Вас посетить {{ eventType }} {{ getFirstLetter speaker.firstName }}{{getFirstLetter speaker.middleName }} {{ speaker.lastNameGenitive }}<br><b>"{{ title }}"</b>.
			</mj-text>
            <mj-text font-size="18px">Он состоится <b>{{#if endDate}}{{ getDay startDate }}-{{ getDayAndMonth endDate }}{{else}}{{ getDayAndMonth startDate }}{{/if}}</b>{{#if startTime}} с {{ getTime startTime }} до {{ getTime endTime }} (МСК){{/if}}.
			</mj-text>
		</mj-column>
	</mj-section>

	<mj-section>
		<mj-column>
                <mj-button font-size="20px" background-color="#a64d79" href="{{ registrationUrl }}" color="white">Зарегистрироваться на {{ eventType }}</mj-button>
		</mj-column>
	</mj-section>

</mj-wrapper>
`;

export default Announce;
